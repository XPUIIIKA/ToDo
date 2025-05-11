import { StyleSheet, View } from "react-native";
import { ToDoElement } from "./ToDoElement";

export function ToDoList({toDoList, deleteToDo, setComplitedToDo}){
	return(
	<View style={styles.list}>
		{
			toDoList.map(toDo =>{
				return <ToDoElement setComplitedToDo={setComplitedToDo} deleteToDo={deleteToDo} toDo={toDo} key={toDo.id}/>
			})
		}
	</View>
	);
}

const styles = StyleSheet.create({
	list:{
		borderRadius: 15,
		marginTop: 20,
		margin: 15,
		backgroundColor: '#d6d2d2',
		padding: 10
	}
});