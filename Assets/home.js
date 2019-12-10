document.addEventListener('DOMContentLoaded', function() {

  let db = connect('https://codesign2018-2.firebaseio.com')

  let params = extract()

  let path = '/'

  db.download(path, function(data) {

    areas = []
    let x = data.Projetos
    for (let projeto in x){
      area = data.Projetos[projeto]['Área']
      if (areas.indexOf(area) == -1) {
        areas.push(area)
      }
    }
    projetos = {}
    for (let projeto in x){
        projetos[projeto] = {'nome': data.Projetos[projeto]['Nome'],
        'img': data.Projetos[projeto]['Img_Home'], 'area': data.Projetos[projeto]['Área']}
    }

    replace('main', {
      'projeto': projetos,
      'area': areas.sort(),
    })
  })
})
