import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  View,
  Text,
} from 'react-native';
import {GridStyles} from '../../shared/theme/grid.styles';
import Search from './components/search/search';
import Message from './components/message/message';
import {HomeStyles} from './home.styles';
import {SpaceStyles} from '../../shared/theme/space.styles';
import {getQuestions} from '../../services/questions.service';
import Question from './components/question/question';
import {getCategories, CategoryData} from '../../services/category.service';
import Category from './components/category/category';

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

const Home: React.FC = () => {
  const scrollViewRef = useRef(null);
  const [refreshing, setRefreshing] = useState(false);
  const [questionsData, setQuestionsData] = useState([]);
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    pageSize: 25,
    pageCount: 1,
    total: 0,
  });
  const [loading, setLoading] = useState(false);

  const fetchQuestions = async () => {
    try {
      const data = await getQuestions();
      setQuestionsData(data);
    } catch (error) {
    } finally {
      setRefreshing(false);
      setLoading(false);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  useEffect(() => {
    fetchQuestions();
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const result = await getCategories();
      setCategories(prevData => [...prevData, ...result.data]);
      setPagination(result?.meta?.pagination);
    } catch (error) {
    } finally {
      setRefreshing(false);
      setLoading(false);
    }
  };

  // const handleEndReached = () => {
  //   console.log('handleend');
  //   // fetchCategories();
    
  //   // if (!loading && pagination.page < pagination.pageCount) {
  //   //   setPagination(prevPagination => ({
  //   //     ...prevPagination,
  //   //     page: prevPagination.page + 1,
  //   //   }));
  //   // }
  // };

  
  const handleEndReached = () => {
    console.log('handleEndReached');
  };

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;

    const paddingToBottom = 20;
    const isEndReached =
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;

    if (isEndReached) {
      handleEndReached();
    }
  };

  const renderVertical = ({ item }) => (
    <Category item={item} />
  );
  const renderHorizontal = ({ item }) => (
    <Question item={item} />
  );

  return (
    <SafeAreaView style={[GridStyles.flexDefault, HomeStyles.container]}>
      <Search />
      <ScrollView
       ref={scrollViewRef}
       onScroll={handleScroll}
       showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Message />
        <View style={[SpaceStyles.px(24)]}>
          <Text style={HomeStyles.getStart}>Get Started</Text>
          <ScrollView horizontal={true}>
          <FlatList
            data={questionsData}
            keyExtractor={item => item?.id.toString()}
            renderItem={renderHorizontal}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{width: 10}} />}
          />
          </ScrollView >
          <ScrollView  horizontal={false}>
          <FlatList
            data={categories}
            keyExtractor={item => item?.id.toString() * Math.random()}
            renderItem={renderVertical}
            numColumns={2}
            contentContainerStyle={HomeStyles.listContainer}
            columnWrapperStyle={HomeStyles.columnWrapper}
            initialNumToRender={10}
            onEndReachedThreshold={0.1}
          />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
