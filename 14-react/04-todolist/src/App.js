/*
* @Author: Chris
* @Date:   2019-10-23 09:40:06
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-23 11:24:01
*/
import React,{ Component } from 'react'
import "./App.css"

class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			list:["吃饭","睡觉","敲代码","跑步"],
			task:''
		}
	}
	handleClick(){
		/*
		console.log(this)
		console.log('btn click...')
		console.log(this.state)
		this.state.list.push(this.state.task)
		console.log(this.state)
		*/
		//数据驱动界面
		this.setState({
			list:[...this.state.list,this.state.task],
			task:''
		})
	}
	handleChange(ev){
		/*
		console.log(ev.target.value)
		console.log(this.state)
		this.state.task = ev.target.value
		console.log(this.state)
		*/
		this.setState({
			task:ev.target.value
		})
	}
	render(){
		return(
		<div className="App">		
			<input onChange={this.handleChange.bind(this)} value={this.state.task} />
			<button onClick={this.handleClick.bind(this)}>提交</button>
			<ul>
				{
					this.state.list.map((item,index)=>{
						return(<li key={index}>{item}</li>)
					})
				}
			</ul>
		</div>
		)
	}
}
export default App