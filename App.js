import { ScrollView, StyleSheet, View } from 'react-native';
import { ToDoList } from './components/ToDoList';
import { useEffect, useState } from 'react';
import { Form } from './components/Form';



export default function App() {
  const [toDoList, setToDoList] = useState([]);
  
  useEffect(() => {
    fetch('https://3116-89-229-111-249.ngrok-free.app/tasks')
    .then(res => res.json())
    .then(data => setToDoList(data))
  }, []);

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
    <ScrollView>
      <View style={styles.body}>
        <Form toDoList={toDoList} setToDoList={setToDoList} />
        <ToDoList style={styles.toDoList} toDoList={toDoList} deleteToDo={deleteToDo} setComplitedToDo={setComplitedToDo}/>
      </View>
    </ScrollView>
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
