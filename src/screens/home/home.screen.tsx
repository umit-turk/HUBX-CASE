import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
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
import {getCategories} from '../../services/category.service';
import {CategoryData} from '../../shared/interfaces/category.interface';
import {QuestionData} from '../../shared/interfaces/question.interface';
import Category from './components/category/category';

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

const Home: React.FC = () => {
  const scrollViewRef = useRef(null);
  const [questionsData, setQuestionsData] = useState<QuestionData[]>([]);
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    pageSize: 25,
    pageCount: 1,
    total: 0,
  });
  const [skip, setSkip] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchQuestions = async () => {
    try {
      const data = await getQuestions();
      setQuestionsData(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
    fetchCategories(pagination?.page);
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const result = await getCategories(pagination.page);
      const currentPage = result?.meta?.pagination.page;
      if (skip > currentPage) return;
      setCategories(prevData => [...prevData, ...result?.data]);
      setPagination(result?.meta?.pagination);
      setSkip(prev => prev + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEndReached = () => {
    fetchCategories(pagination?.page);
  };

  const handleScroll = event => {
    const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;
    const paddingToBottom = 20;
    const isEndReached = layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
    if (isEndReached) {
    if (skip > pagination.page) return;
      handleEndReached();
    }
  };

  const renderVertical = ({item}) => <Category item={item} />;
  const renderHorizontal = ({item}) => <Question item={item} />;

  return (
    <SafeAreaView style={[GridStyles.flexDefault, HomeStyles.container]}>
      <Search />
      <ScrollView
        ref={scrollViewRef}
        onScroll={handleScroll}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}>
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
          </ScrollView>
          <ScrollView horizontal={false}>
            <FlatList
              data={categories}
              keyExtractor={(_,i) => i.toString()}
              renderItem={renderVertical}
              numColumns={2}
              contentContainerStyle={HomeStyles.listContainer}
              columnWrapperStyle={HomeStyles.columnWrapper}
              initialNumToRender={10}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
