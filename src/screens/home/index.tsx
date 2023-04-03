import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import {useScrollToTop} from '@react-navigation/native';
import MoreVerticalIcon from '@src/assets/images/moreVerticalIcon';
import DraggableBottomModal from '@src/components/DraggableBottomModal';

const {width: widthWindows, height: heightWindows} = Dimensions.get('screen');

type PostType = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const useGetPost = () => {
  const [postList, setPostList] = useState<PostType[]>();

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then(response => response.json())
      .then(data => {
        setPostList(data.slice(-15));
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {postList, fetchData};
};

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const ref = React.useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  useScrollToTop(ref);
  const {postList} = useGetPost();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // fetchData();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      {postList && (
        <FlatList
          ref={ref}
          data={postList}
          numColumns={2}
          renderItem={({item}: {item: PostType}) => {
            return (
              <View key={item.id.toString()} style={styles.card}>
                <TouchableOpacity
                  style={styles.moreOptions}
                  onPress={() => setIsOpen(!isOpen)}>
                  <MoreVerticalIcon color={'#000'} />
                </TouchableOpacity>
                <Image source={{uri: item.url}} style={styles.image} />
                <Text style={styles.text}>{item.title}</Text>
              </View>
            );
          }}
          keyExtractor={item => item.id.toString()}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              progressViewOffset={1}
              enabled={true}
              progressBackgroundColor="#ccc"
            />
          }
        />
      )}
      {isOpen && <DraggableBottomModal isOpen={isOpen} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },

  card: {
    width: widthWindows / 2 - 40,
    height: heightWindows / 3,
    elevation: 1,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: '70%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  text: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#000',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 4,
  },

  moreOptions: {
    position: 'absolute',
    right: 1,
    top: 8,
    zIndex: 20,
  },
});

export default HomeScreen;
