import { StyleSheet, Text, View } from 'react-native';

export function ToDoElement({toDo}){
	return(
		<View style={styles.ToDoElement}>
			<Text>Title: {toDo.title}</Text>
			<Text>Body: {toDo.body}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	ToDoElement: {
		marginTop: 10
	}
});