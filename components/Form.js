import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export function Form({toDoList, setToDoList}){
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	function newId(){
		if (toDoList.length === 0){
			return 0
		}
		const idList = toDoList.map(toDo => toDo.id);
		const newId = Math.max(...idList);
		return newId + 1;
	}

	function handleSubmit(){
		if(!title || !body){
			return
		}

		const toDo =
		{
			id: newId(),
			title,
			body,
			completed: false
		}

		const newToDoList = [...toDoList, toDo];

		setToDoList(newToDoList);
	}

	return(
		<View style={styles.form}>
			<TextInput style={styles.elem} placeholder="Title:" value={title} onChangeText={setTitle}/>
			<TextInput style={styles.elem} placeholder="Body:" value={body} onChangeText={setBody}/>
			<Button title="Send" onPress={handleSubmit}/>
		</View>
	)
}

const styles = StyleSheet.create({
	form: {
		borderRadius: 15,
		margin: 15,
		backgroundColor: '#d6d2d2',
		padding: 10
	},
	elem: {
		marginTop: 10
	}
});