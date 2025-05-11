import { StyleSheet, View } from 'react-native';
import { ToDoList } from './components/ToDoList';
import { useState } from 'react';
import { Form } from './components/Form';



export default function App() {
  const [toDoList, setToDoList] = useState([
    {
      id: 0,
      title: 'Title 1',
      body: 'Body 1 af fasr ae ara wera ra',
      complieted: true
    },  
    {
      id: 1,
      title: 'Title 2',
      body: 'Body 2 af yu tyiy aeryu era ra',
      complieted: false
    },  
    {
      id: 2,
      title: 'Title 3',
      body: 'Body 3 af er we rtwret wryetdy ty ry6u 7ythwera ra',
      complieted: true
    },  
    {
      id: 3,
      title: 'Title 4',
      body: 'Body 4 fad faf f fgsd gedrt hdfcg re egfd r gedtr ydfht r ra',
      complieted: false
    }
  ]);
  
  function deleteToDo(id){
    const newList = toDoList.filter(toDo => toDo.id != id);
    setToDoList(newList);
  }

  function setComplitedToDo(id){
    const newList = toDoList.map(toDo => 
      toDo.id == id? {...toDo, complieted: !toDo.complieted}: toDo);
    setToDoList(newList);
  }

  return (
    <View style={styles.body}>
      <Form toDoList={toDoList} setToDoList={setToDoList} />
      <ToDoList style={styles.toDoList} toDoList={toDoList} deleteToDo={deleteToDo} setComplitedToDo={setComplitedToDo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 50,
    margin: 15,
  }
});
