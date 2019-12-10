document.addEventListener('DOMContentLoaded', function() {
	let db = connect('https://codesign2018-2.firebaseio.com')

	let params = extract()

	let url = '/Projetos/' + params['projeto'] + '/'

  

  	db.download(url, function(data) {
  		replace('body', {
  			'Area': data['Área'],
  			'Projeto': data['Nome'],
        'Descricao': data['Descrição'],
        'Desenvolvimento': data['Desenvolvimento'],
        'Requerimentos': data['Requerimentos'],
        'Img_Descricao': data['Img_Descrição'],
        'Alt_Descricao': data['Alt_Descrição'],
        'Img_Desenvolvimento': data['Img_Desenvolvimento'],
        'Alt_Desenvolvimento': data['Alt_Desenvolvimento']
  		})
      replace('title', {
        'Projeto': data['Nome']
      })
  	})
  	})