import { useState, useEffect } from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  counter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countStyle: {
    fontSize: 50,
  },
});

const Count = () => {
  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);

  let time = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('hi', time);
      setPrevCount(time), time++, setCount(time);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <Text style={styles.countStyle}>{!(count % 2) ? count : prevCount}</Text>
  );
};

const App = () => {
  const [showCounter, setshowCounter] = useState(true);

  return (
    <View style={styles.counter}>
      <Button title="toggle" onPress={() => setshowCounter(!showCounter)} />
      {showCounter && <Count />}
    </View>
  );
};

export default App;
