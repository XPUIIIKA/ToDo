import { Button, StyleSheet, Text, View } from 'react-native';

export function ToDoElement({toDo, deleteToDo, setComplitedToDo}){
	return(
		<View style={[styles.ToDoElement, { backgroundColor: toDo.complieted ? '#008000' : '#FF0000' }]}>
			<Text>Title: {toDo.title}</Text>
			<Text>Body: {toDo.body}</Text>
			<View>
				<Button title={toDo.complieted? "☑️" : "⬜"} onPress={() => setComplitedToDo(toDo.id)}/>
				<Button title="Delete" onPress={() => deleteToDo(toDo.id)}/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	ToDoElement: {
		marginTop: 10,
		padding: 10,
		borderRadius: 15
	}
});