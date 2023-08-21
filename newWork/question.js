
const printData = (data,spaces = 0) => {
	if (!data.length) return
	
	data.map((el) => {
		for(let i = 0;i<spaces;i++){
			process.stdout.write(" ")
		}
		console.log(el.id)
		if(el.children) printData(el.children,spaces+1)
	})
}


const data = [{
	id: 1
},
{
	id: 2,
	children: [
		{
			id: 4
		},
		{
			id: 5,
			children: [
				{
					id: 7,
					children: [
						{
							id: 23,
							children: [
								{
									id: 31
								}
							]
						}
					]
				}
			]
		},
		{
			id: 6,
			children: [
				{
					id: 23,
					children: [
						{
							id: 31
						}
					]
				}
			]
		}
	]
},
{
	id: 3,
	children: [
		{
			id: 8,
			children: [
				{
					id: 23,
					children: [
						{
							id: 31,
							children: [
								{id: 89}
							]
						}
					]
				}
			]
		}
	]
}
]

printData(data)