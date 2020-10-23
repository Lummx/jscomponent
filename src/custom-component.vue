<template>
	<div>
		<p>{{greet}}</p>
		<p>{{intro}}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			greet: 'Hello World!',
			intro: '我是自定义的组件'
		}
	}
}
</script>

<style>
div {
	max-width: 600px;
	background: #f6f6f6;
	color: #333;
	text-align: center;
	margin: 30px auto;
	padding: 20px;
	font-weight: bold;
	font-family: 'Microsoft YaHei';
	border-radius: 10px;
}
</style>