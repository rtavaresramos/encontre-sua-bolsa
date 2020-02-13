$(document).ready(function(){
  
  var container = $('#schoolship-container')
  var citySelect = $('#city-select')
  var courseSelect = $('#course-select')
  var checkPresentialConfirmation = $('#presencial')
  var checkEadConfirmation = $('#ead')
  
  
  var courses =[]
  var cities =[]
  var auxCity = []


    
    $.ajax({
        type: 'GET',
        url: 'https://testapi.io/api/redealumni/scholarships',
        success: function(data){
          
          
          // Here was add the controll with duplicate data for select tags

          $.each(data, function(i, data){
            
            cities[i] = data.campus.city

            return cities
          })

          $.each(data, function(i, data){
            
            courses[i] = data.course.name

            return courses
          })
          
          const newCourses = [ ...new Set( courses ) ];
          const newCities = [ ...new Set( cities ) ];

          $.each(newCities, function(i){
            
            citySelect.append('<option value="'+newCities[i]+'">'+ newCities[i] +' </option>')

          }) 
          
          $.each(newCourses, function(i){
            
            courseSelect.append('<option value="'+newCourses[i]+'">'+ newCourses[i] +' </option>')

            return newCourses
          })

          // Here, I'm working on the api request

          $.each(data, function(i, data){
            
            var id = i

            
              
              auxCity[i] = "<tr><div class='col'><div class='row'><div class='col col-2'><div class='col col-4'><td id='td-checkbox'><label class='label-container black-text mr-4'><input type='checkbox' id='"+id+"'><span class='check'></span></label></td></div><div class='col col-3'><td id='td-img'><img class='img-adjust' src='"+data.university.logo_url+"'></td></div><div class='col col-3 align-start ml-3'><td id='td-course'><h5 class='d-blue-text'>"+ data.course.name +"</h5><p class='sm-text'>"+ data.course.level +"</p></td></div></div><div class='col col-2 align-end mr-7'><td id='td-discount'><p>Bolsa de <span>"+ data.discount_percentage +"% </span><br><span>R$ "+ data.price_with_discount +"/mês</span></p></td></div></div></div></tr><hr class='divisor mt-8 mb-8'>"
             
              container.append( auxCity[i])
            return auxCity
          })
          
         
          // Here was added the filter of cities and universty course working together

          $('select').change( function(){
            
            $('tr').remove()


            $.each(data, function(i, data){
              courseSelect = $('#course-select').val()
              citySelect = $('#city-select').val()
              
              id = i
              
              if($('#presencial').is(':checked')){

                if(citySelect == 'all' && courseSelect == 'all'){
                  
                  if(data.course.kind == 'Presencial'){
                    console.log('curso presencial na tela')
                    container.append( auxCity[i])
  
                  }
              }else{
                
                if(citySelect == 'all' && courseSelect == data.course.name ){
  
                  if(data.course.kind == 'Presencial'){
                    console.log('curso presencial na tela')
                    container.append( auxCity[i])
  
                  }
                    }else{
                
                      if(citySelect == data.campus.city && courseSelect == 'all'){
                        if(data.course.kind == 'Presencial'){
                          console.log('curso presencial na tela')
                          container.append( auxCity[i])
  
                        }
                          }else{
                
                            if(citySelect == data.campus.city && courseSelect == data.course.name ){
                              if(data.course.kind == 'Presencial'){
                                console.log('curso presencial na tela')
                                container.append( auxCity[i])
  
                              }
                                }
                          }
                    }
    
              }
  
              }
  
              if($('#ead').is(':checked')){
  
                if(citySelect == 'all' && courseSelect == 'all'){
                  
                  if(data.course.kind == 'EaD'){
                    console.log('curso ead na tela')
                    container.append( auxCity[i])
  
                  }
              }else{
                
                if(citySelect == 'all' && courseSelect == data.course.name ){
  
                  if(data.course.kind == 'EaD'){
                    console.log('curso ead na tela')
                    container.append( auxCity[i])
  
                  }
                    }else{
                
                      if(citySelect == data.campus.city && courseSelect == 'all'){
                        if(data.course.kind == 'EaD'){
                          console.log('curso ead na tela')
                          container.append( auxCity[i])
  
                        }
                          }else{
                
                            if(citySelect == data.campus.city && courseSelect == data.course.name ){
                              if(data.course.kind == 'EaD'){
                                console.log('curso ead na tela')
                                container.append( auxCity[i])
  
                              }
                                }
                          }
                    }
    
              }
  
              }
              
              })
          })

        // Working on checkbox elements



        $('.input-jquery').change( function(){
            
          $('tr').remove()


          $.each(data, function(i, data){
            courseSelect = $('#course-select').val()
            citySelect = $('#city-select').val()
            

            id = i

            if($('#presencial').is(':checked')){

              if(citySelect == 'all' && courseSelect == 'all'){
                
                if(data.course.kind == 'Presencial'){
                  console.log('curso presencial na tela')
                  container.append( auxCity[i])

                }
            }else{
              
              if(citySelect == 'all' && courseSelect == data.course.name ){

                if(data.course.kind == 'Presencial'){
                  console.log('curso presencial na tela')
                  container.append( auxCity[i])

                }
                  }else{
              
                    if(citySelect == data.campus.city && courseSelect == 'all'){
                      if(data.course.kind == 'Presencial'){
                        console.log('curso presencial na tela')
                        container.append( auxCity[i])

                      }
                        }else{
              
                          if(citySelect == data.campus.city && courseSelect == data.course.name ){
                            if(data.course.kind == 'Presencial'){
                              console.log('curso presencial na tela')
                              container.append( auxCity[i])

                            }
                              }
                        }
                  }
  
            }

            }

            if($('#ead').is(':checked')){

              if(citySelect == 'all' && courseSelect == 'all'){
                
                if(data.course.kind == 'EaD'){
                  console.log('curso ead na tela')
                  container.append( auxCity[i])

                }
            }else{
              
              if(citySelect == 'all' && courseSelect == data.course.name ){

                if(data.course.kind == 'EaD'){
                  console.log('curso ead na tela')
                  container.append( auxCity[i])

                }
                  }else{
              
                    if(citySelect == data.campus.city && courseSelect == 'all'){
                      if(data.course.kind == 'EaD'){
                        console.log('curso ead na tela')
                        container.append( auxCity[i])

                      }
                        }else{
              
                          if(citySelect == data.campus.city && courseSelect == data.course.name ){
                            if(data.course.kind == 'EaD'){
                              console.log('curso ead na tela')
                              container.append( auxCity[i])

                            }
                              }
                        }
                  }
  
            }

            }
          
  
            })
        })
        
        }
	})
});



            
// if(citySelect == 'all' && courseSelect == 'all'){
//   container.append("<tr><div class='col'><div class='row'><div class='col col-2'><div class='col col-4'><td id='td-checkbox'><label class='label-container black-text mr-4'><input type='checkbox' id='"+id+"'><span class='check'></span></label></td></div><div class='col col-3'><td id='td-img'><img class='img-adjust' src='"+data.university.logo_url+"'></td></div><div class='col col-3 align-start ml-3'><td id='td-course'><h5 class='d-blue-text'>"+ data.course.name +"</h5><p class='sm-text'>"+ data.course.level +"</p></td></div></div><div class='col col-2 align-end mr-7'><td id='td-discount'><p>Bolsa de <span>"+ data.discount_percentage +"% </span><br><span>R$ "+ data.price_with_discount +"/mês</span></p></td></div></div></div></tr><hr class='divisor mt-8 mb-8'>")
// }else{

// if(citySelect == 'all' && courseSelect == data.course.name ){
//   container.append("<tr><div class='col'><div class='row'><div class='col col-2'><div class='col col-4'><td id='td-checkbox'><label class='label-container black-text mr-4'><input type='checkbox' id='"+id+"'><span class='check'></span></label></td></div><div class='col col-3'><td id='td-img'><img class='img-adjust' src='"+data.university.logo_url+"'></td></div><div class='col col-3 align-start ml-3'><td id='td-course'><h5 class='d-blue-text'>"+ data.course.name +"</h5><p class='sm-text'>"+ data.course.level +"</p></td></div></div><div class='col col-2 align-end mr-7'><td id='td-discount'><p>Bolsa de <span>"+ data.discount_percentage +"% </span><br><span>R$ "+ data.price_with_discount +"/mês</span></p></td></div></div></div></tr><hr class='divisor mt-8 mb-8'>")
//     }else{

//       if(citySelect == data.campus.city && courseSelect == 'all'){
//         container.append("<tr><div class='col'><div class='row'><div class='col col-2'><div class='col col-4'><td id='td-checkbox'><label class='label-container black-text mr-4'><input type='checkbox' id='"+id+"'><span class='check'></span></label></td></div><div class='col col-3'><td id='td-img'><img class='img-adjust' src='"+data.university.logo_url+"'></td></div><div class='col col-3 align-start ml-3'><td id='td-course'><h5 class='d-blue-text'>"+ data.course.name +"</h5><p class='sm-text'>"+ data.course.level +"</p></td></div></div><div class='col col-2 align-end mr-7'><td id='td-discount'><p>Bolsa de <span>"+ data.discount_percentage +"% </span><br><span>R$ "+ data.price_with_discount +"/mês</span></p></td></div></div></div></tr><hr class='divisor mt-8 mb-8'>")
//           }else{

//             if(citySelect == data.campus.city && courseSelect == data.course.name ){
//               container.append("<tr><div class='col'><div class='row'><div class='col col-2'><div class='col col-4'><td id='td-checkbox'><label class='label-container black-text mr-4'><input type='checkbox' id='"+id+"'><span class='check'></span></label></td></div><div class='col col-3'><td id='td-img'><img class='img-adjust' src='"+data.university.logo_url+"'></td></div><div class='col col-3 align-start ml-3'><td id='td-course'><h5 class='d-blue-text'>"+ data.course.name +"</h5><p class='sm-text'>"+ data.course.level +"</p></td></div></div><div class='col col-2 align-end mr-7'><td id='td-discount'><p>Bolsa de <span>"+ data.discount_percentage +"% </span><br><span>R$ "+ data.price_with_discount +"/mês</span></p></td></div></div></div></tr><hr class='divisor mt-8 mb-8'>")
//                 }
//           }
//     }

// }
