import * as React from 'react';

import { Button, StyleSheet, View } from 'react-native';

import NativeJSIWorkshopsModule from './specs/NativeJSIWorkshopsModule';

NativeJSIWorkshopsModule.install();

declare global {
  var answerToTheUltimateQuestionOfLifeTheUniverseAndEverything: number;
  var isWednesday: boolean;
  var conferenceName: string;
  var myAwesomeArray: number[];
  var giveMeFive: () => number;
  var sumMeThis: (a: number, b: number) => number;
  var divideMeThis: (a: number, b: number) => number;
  var reverseMeThis: (str: string) => string;
  var sumMeThisObject: (obj: { firstNum: number, lastNum: number }) => number;
  var sumMeThisArray: (arr: number[]) => number;
  var nativeMap: (arr: number[], callback: (x: number) => number) => number[];
  var runJsFunction: () => void;
  var getDateObject: () => { day: number, month: number, year: number, now: number, hello: string };
  var getInfinityObject: () => Record<string, any>;
}

export default function App() {

  const task1 = () => {};

  const task2 = () => {};

  const task3 = () => {};

  const task4 = () => {};

  const task5 = () => {};

  const task6 = () => {};

  const task7 = () => {};

  const task8 = () => {};

  const task9 = () => {};

  const task10 = () => {};

  const task11 = () => {};

  const task12 = () => {};

  const task13 = () => {};

  const task14 = () => {};

  const task15 = () => {};

  return (
    <View style={styles.container}>
      <Button title="task1" onPress={task1} />
      <Button title="task2" onPress={task2} />
      <Button title="task3" onPress={task3} />
      <Button title="task4" onPress={task4} />
      <Button title="task5" onPress={task5} />
      <Button title="task6" onPress={task6} />
      <Button title="task7" onPress={task7} />
      <Button title="task8" onPress={task8} />
      <Button title="task9" onPress={task9} />
      <Button title="task10" onPress={task10} />
      <Button title="task11" onPress={task11} />
      <Button title="task12" onPress={task12} />
      <Button title="task13" onPress={task13} />
      <Button title="task14" onPress={task14} />
      <Button title="task15" onPress={task15} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
