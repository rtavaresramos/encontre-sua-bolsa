$(document).ready(function(){
  
  var container = $('#schoolship-container')
  var citySelect = $('#city-select')
  var courseSelect = $('#course-select')
  var rangeValue = $('#my-range')
  var subButton = $('#form-submit')
  var cardContainer =$('#card-place')
  
  
  
  var homeData = []
  var courses = []
  var cities = []
  var auxCity = []
  var auxCard = []


    
    $.ajax({
        type: 'GET',
        url: 'https://rtavaresramos.github.io/json-quero/db.json',
        success: function(data){
          
          
          // Here was added the controll with duplicate data for select tags

        $('#modal-btn').click(function(){
          $('.tr-checkbox').attr('checked', false)
        })

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

          // Here, was done the api request and save datas inside one matrix

        $.each(data, function(i, data){
            
            var id = i

              auxCity[i] = "<tr><div class='col'><div class='row'><div class='col col-2'><div class='col col-4'><td class='td-checkbox'><label class='label-container black-text mr-4'><input class='tr-checkbox mt-3' type='checkbox' id='"+id+"'><span class='check'></span></label></td></div><div class='col col-3'><td class='td-img'><img class='img-adjust' src='"+data.university.logo_url+"'></td></div><div class='col col-3 align-start ml-3'><td class='td-course'><h5 class='d-blue-text'>"+ data.course.name +"</h5><p class='sm-text'>"+ data.course.level +"</p></td></div></div><div class='col col-2 align-end mr-7'><td class='td-discount'><p class='align-end'>Bolsa de <span>"+ data.discount_percentage +"% </span><br><span>R$ "+ data.price_with_discount +"/mês</span></p></td></div></div></div></tr><hr class='divisor mt-8 mb-8'>"
              
              container.append( auxCity[i])

            return auxCity
        })
        
         
          // Here was added the filter of cities and universty course working together

        $('select').change( function(){
          $('#form-submit').addClass('disabled-btn')
          $('#form-submit').removeClass('enabled-btn')
            $('tr').remove()


            $.each(data, function(i, data){
              courseSelect = $('#course-select').val()
              citySelect = $('#city-select').val()
              rangeValue = $('#my-range').val()
      
              id = i

              if($('#presencial').is(':checked')){

                if(citySelect == 'all' && courseSelect == 'all'){
                  
                  if(data.course.kind == 'Presencial'){
                    if(rangeValue >= data.price_with_discount){
                      
                      container.append( auxCity[i])
  
          $('.tr-checkbox').change( function(){
            e = $('.tr-checkbox')
            a = $('tr')
            homeData = []
  
            $('#form-submit').addClass('disabled-btn')
            $('#form-submit').removeClass('enabled-btn')
  
            for( var i = 0; i< e.length ; i++){
  
                $($(e[i]).is(':checked')).each(function(){
                    homeData[i] = a[i]
                    $('#form-submit').removeClass('disabled-btn')
                    $('#form-submit').addClass('enabled-btn')
                    
              })
              }
            })
                    }
                  }
              }else{
                
                if(citySelect == 'all' && courseSelect == data.course.name ){
  
                  if(data.course.kind == 'Presencial'){
                    console.log('curso presencial na tela')
                    if(rangeValue >= data.price_with_discount){
                      
                      container.append( auxCity[i]) 
  
                      $('.tr-checkbox').change( function(){
                        e = $('.tr-checkbox')
                        a = $('tr')
                        homeData = []
              
                        $('#form-submit').addClass('disabled-btn')
                        $('#form-submit').removeClass('enabled-btn')
              
                        for( var i = 0; i< e.length ; i++){
              
                            $($(e[i]).is(':checked')).each(function(){
                                homeData[i] = a[i]
                                $('#form-submit').removeClass('disabled-btn')
                                $('#form-submit').addClass('enabled-btn')
                                
                          })
                          }
                        })
                    }
  
                  }
                    }else{
                
                      if(citySelect == data.campus.city && courseSelect == 'all'){
                        if(data.course.kind == 'Presencial'){
                          if(rangeValue >= data.price_with_discount){
                      
                            container.append( auxCity[i])
                             
                            $('.tr-checkbox').change( function(){
                              e = $('.tr-checkbox')
                              a = $('tr')
                              homeData = []
                    
                              $('#form-submit').addClass('disabled-btn')
                              $('#form-submit').removeClass('enabled-btn')
                    
                              for( var i = 0; i< e.length ; i++){
                    
                                  $($(e[i]).is(':checked')).each(function(){
                                      homeData[i] = a[i]
                                      $('#form-submit').removeClass('disabled-btn')
                                      $('#form-submit').addClass('enabled-btn')
                                      
                                })
                                }
                              })
                          }
  
                        }
                          }else{
                
                            if(citySelect == data.campus.city && courseSelect == data.course.name ){
                              if(data.course.kind == 'Presencial'){
                                if(rangeValue >= data.price_with_discount){
                      
                                  container.append( auxCity[i])
                                   
                                  $('.tr-checkbox').change( function(){
                                    e = $('.tr-checkbox')
                                    a = $('tr')
                                    homeData = []
                          
                                    $('#form-submit').addClass('disabled-btn')
                                    $('#form-submit').removeClass('enabled-btn')
                          
                                    for( var i = 0; i< e.length ; i++){
                          
                                        $($(e[i]).is(':checked')).each(function(){
                                            homeData[i] = a[i]
                                            $('#form-submit').removeClass('disabled-btn')
                                            $('#form-submit').addClass('enabled-btn')
                                            
                                      })
                                      }
                                    })
                                }
                              }
                                }
                          }
                    }
    
              }
  
              }
  
              if($('#ead').is(':checked')){
  
                if(citySelect == 'all' && courseSelect == 'all'){
                  
                  if(data.course.kind == 'EaD'){
                    if(rangeValue >= data.price_with_discount){
                      
                      container.append( auxCity[i])
                       
                      $('.tr-checkbox').change( function(){
                        e = $('.tr-checkbox')
                        a = $('tr')
                        homeData = []
              
                        $('#form-submit').addClass('disabled-btn')
                        $('#form-submit').removeClass('enabled-btn')
              
                        for( var i = 0; i< e.length ; i++){
              
                            $($(e[i]).is(':checked')).each(function(){
                                homeData[i] = a[i]
                                $('#form-submit').removeClass('disabled-btn')
                                $('#form-submit').addClass('enabled-btn')
                                
                          })
                          }
                        })
                    }
                  }
              }else{
                
                if(citySelect == 'all' && courseSelect == data.course.name ){
  
                  if(data.course.kind == 'EaD'){
                    if(rangeValue >= data.price_with_discount){
                      
                      container.append( auxCity[i])
                       
                      $('.tr-checkbox').change( function(){
                        e = $('.tr-checkbox')
                        a = $('tr')
                        homeData = []
              
                        $('#form-submit').addClass('disabled-btn')
                        $('#form-submit').removeClass('enabled-btn')
              
                        for( var i = 0; i< e.length ; i++){
              
                            $($(e[i]).is(':checked')).each(function(){
                                homeData[i] = a[i]
                                $('#form-submit').removeClass('disabled-btn')
                                $('#form-submit').addClass('enabled-btn')
                                
                          })
                          }
                        })
                    }
                  }
                    }else{
                
                      if(citySelect == data.campus.city && courseSelect == 'all'){
                        if(data.course.kind == 'EaD'){
                          if(rangeValue >= data.price_with_discount){
                      
                            container.append( auxCity[i])
                             
                            $('.tr-checkbox').change( function(){
                              e = $('.tr-checkbox')
                              a = $('tr')
                              homeData = []
                    
                              $('#form-submit').addClass('disabled-btn')
                              $('#form-submit').removeClass('enabled-btn')
                    
                              for( var i = 0; i< e.length ; i++){
                    
                                  $($(e[i]).is(':checked')).each(function(){
                                      homeData[i] = a[i]
                                      $('#form-submit').removeClass('disabled-btn')
                                      $('#form-submit').addClass('enabled-btn')
                                      
                                })
                                }
                              })
                          }
                        }
                          }else{
                
                            if(citySelect == data.campus.city && courseSelect == data.course.name ){
                              if(data.course.kind == 'EaD'){
                                if(rangeValue >= data.price_with_discount){
                      
                                  container.append( auxCity[i])
                                   
                                  $('.tr-checkbox').change( function(){
                                    e = $('.tr-checkbox')
                                    a = $('tr')
                                    homeData = []
                          
                                    $('#form-submit').addClass('disabled-btn')
                                    $('#form-submit').removeClass('enabled-btn')
                          
                                    for( var i = 0; i< e.length ; i++){
                          
                                        $($(e[i]).is(':checked')).each(function(){
                                            homeData[i] = a[i]
                                            $('#form-submit').removeClass('disabled-btn')
                                            $('#form-submit').addClass('enabled-btn')
                                            
                                      })
                                      }
                                    })
                                }
                              }
                                }
                          }
                    }
    
              }
  
              }
              })

        })

          // Working on checkbox elements when the select have not been changed

        $('.input-jquery').change( function(){
          $('#form-submit').addClass('disabled-btn')
          $('#form-submit').removeClass('enabled-btn')
          $('tr').remove()


          $.each(data, function(i, data){
            courseSelect = $('#course-select').val()
            citySelect = $('#city-select').val()
            rangeValue = $('#my-range').val()
            
            

            id = i

            if($('#presencial').is(':checked')){

              if(citySelect == 'all' && courseSelect == 'all'){
                
                if(data.course.kind == 'Presencial'){
                  if(rangeValue >= data.price_with_discount){
                    
                    container.append( auxCity[i])

        $('.tr-checkbox').change( function(){
          e = $('.tr-checkbox')
          a = $('tr')
          homeData = []

          $('#form-submit').addClass('disabled-btn')
          $('#form-submit').removeClass('enabled-btn')

          for( var i = 0; i< e.length ; i++){

              $($(e[i]).is(':checked')).each(function(){
                  homeData[i] = a[i]
                  $('#form-submit').removeClass('disabled-btn')
                  $('#form-submit').addClass('enabled-btn')
                  
            })
            }
          })
                  }
                }
            }else{
              
              if(citySelect == 'all' && courseSelect == data.course.name ){

                if(data.course.kind == 'Presencial'){
                  console.log('curso presencial na tela')
                  if(rangeValue >= data.price_with_discount){
                    
                    container.append( auxCity[i]) 

                    $('.tr-checkbox').change( function(){
                      e = $('.tr-checkbox')
                      a = $('tr')
                      homeData = []
            
                      $('#form-submit').addClass('disabled-btn')
                      $('#form-submit').removeClass('enabled-btn')
            
                      for( var i = 0; i< e.length ; i++){
            
                          $($(e[i]).is(':checked')).each(function(){
                              homeData[i] = a[i]
                              $('#form-submit').removeClass('disabled-btn')
                              $('#form-submit').addClass('enabled-btn')
                              
                        })
                        }
                      })
                  }

                }
                  }else{
              
                    if(citySelect == data.campus.city && courseSelect == 'all'){
                      if(data.course.kind == 'Presencial'){
                        if(rangeValue >= data.price_with_discount){
                    
                          container.append( auxCity[i])
                           
                          $('.tr-checkbox').change( function(){
                            e = $('.tr-checkbox')
                            a = $('tr')
                            homeData = []
                  
                            $('#form-submit').addClass('disabled-btn')
                            $('#form-submit').removeClass('enabled-btn')
                  
                            for( var i = 0; i< e.length ; i++){
                  
                                $($(e[i]).is(':checked')).each(function(){
                                    homeData[i] = a[i]
                                    $('#form-submit').removeClass('disabled-btn')
                                    $('#form-submit').addClass('enabled-btn')
                                    
                              })
                              }
                            })
                        }

                      }
                        }else{
              
                          if(citySelect == data.campus.city && courseSelect == data.course.name ){
                            if(data.course.kind == 'Presencial'){
                              if(rangeValue >= data.price_with_discount){
                    
                                container.append( auxCity[i])
                                 
                                $('.tr-checkbox').change( function(){
                                  e = $('.tr-checkbox')
                                  a = $('tr')
                                  homeData = []
                        
                                  $('#form-submit').addClass('disabled-btn')
                                  $('#form-submit').removeClass('enabled-btn')
                        
                                  for( var i = 0; i< e.length ; i++){
                        
                                      $($(e[i]).is(':checked')).each(function(){
                                          homeData[i] = a[i]
                                          $('#form-submit').removeClass('disabled-btn')
                                          $('#form-submit').addClass('enabled-btn')
                                          
                                    })
                                    }
                                  })
                              }
                            }
                              }
                        }
                  }
  
            }

            }

            if($('#ead').is(':checked')){

              if(citySelect == 'all' && courseSelect == 'all'){
                
                if(data.course.kind == 'EaD'){
                  if(rangeValue >= data.price_with_discount){
                    
                    container.append( auxCity[i])
                     
                    $('.tr-checkbox').change( function(){
                      e = $('.tr-checkbox')
                      a = $('tr')
                      homeData = []
            
                      $('#form-submit').addClass('disabled-btn')
                      $('#form-submit').removeClass('enabled-btn')
            
                      for( var i = 0; i< e.length ; i++){
            
                          $($(e[i]).is(':checked')).each(function(){
                              homeData[i] = a[i]
                              $('#form-submit').removeClass('disabled-btn')
                              $('#form-submit').addClass('enabled-btn')
                              
                        })
                        }
                      })
                  }
                }
            }else{
              
              if(citySelect == 'all' && courseSelect == data.course.name ){

                if(data.course.kind == 'EaD'){
                  if(rangeValue >= data.price_with_discount){
                    
                    container.append( auxCity[i])
                     
                    $('.tr-checkbox').change( function(){
                      e = $('.tr-checkbox')
                      a = $('tr')
                      homeData = []
            
                      $('#form-submit').addClass('disabled-btn')
                      $('#form-submit').removeClass('enabled-btn')
            
                      for( var i = 0; i< e.length ; i++){
            
                          $($(e[i]).is(':checked')).each(function(){
                              homeData[i] = a[i]
                              $('#form-submit').removeClass('disabled-btn')
                              $('#form-submit').addClass('enabled-btn')
                              
                        })
                        }
                      })
                  }
                }
                  }else{
              
                    if(citySelect == data.campus.city && courseSelect == 'all'){
                      if(data.course.kind == 'EaD'){
                        if(rangeValue >= data.price_with_discount){
                    
                          container.append( auxCity[i])
                           
                          $('.tr-checkbox').change( function(){
                            e = $('.tr-checkbox')
                            a = $('tr')
                            homeData = []
                  
                            $('#form-submit').addClass('disabled-btn')
                            $('#form-submit').removeClass('enabled-btn')
                  
                            for( var i = 0; i< e.length ; i++){
                  
                                $($(e[i]).is(':checked')).each(function(){
                                    homeData[i] = a[i]
                                    $('#form-submit').removeClass('disabled-btn')
                                    $('#form-submit').addClass('enabled-btn')
                                    
                              })
                              }
                            })
                        }
                      }
                        }else{
              
                          if(citySelect == data.campus.city && courseSelect == data.course.name ){
                            if(data.course.kind == 'EaD'){
                              if(rangeValue >= data.price_with_discount){
                    
                                container.append( auxCity[i])
                                 
                                $('.tr-checkbox').change( function(){
                                  e = $('.tr-checkbox')
                                  a = $('tr')
                                  homeData = []
                        
                                  $('#form-submit').addClass('disabled-btn')
                                  $('#form-submit').removeClass('enabled-btn')
                        
                                  for( var i = 0; i< e.length ; i++){
                        
                                      $($(e[i]).is(':checked')).each(function(){
                                          homeData[i] = a[i]
                                          $('#form-submit').removeClass('disabled-btn')
                                          $('#form-submit').addClass('enabled-btn')
                                          
                                    })
                                    }
                                  })
                              }
                            }
                              }
                        }
                  }
  
            }

            }
            })
        })
        
          // Working with the range component

        $('#my-range').change( function(){
          $('#form-submit').addClass('disabled-btn')
          $('#form-submit').removeClass('enabled-btn')
          $('tr').remove()

          $.each(data, function(i, data){
            courseSelect = $('#course-select').val()
            citySelect = $('#city-select').val()
            rangeValue = $('#my-range').val()

            id = i

            if($('#presencial').is(':checked')){

              if(citySelect == 'all' && courseSelect == 'all'){
                
                if(data.course.kind == 'Presencial'){
                  if(rangeValue >= data.price_with_discount){
                    
                    container.append( auxCity[i])

        $('.tr-checkbox').change( function(){
          e = $('.tr-checkbox')
          a = $('tr')
          homeData = []

          $('#form-submit').addClass('disabled-btn')
          $('#form-submit').removeClass('enabled-btn')

          for( var i = 0; i< e.length ; i++){

              $($(e[i]).is(':checked')).each(function(){
                  homeData[i] = a[i]
                  $('#form-submit').removeClass('disabled-btn')
                  $('#form-submit').addClass('enabled-btn')
                  
            })
            }
          })
                  }
                }
            }else{
              
              if(citySelect == 'all' && courseSelect == data.course.name ){

                if(data.course.kind == 'Presencial'){
                  console.log('curso presencial na tela')
                  if(rangeValue >= data.price_with_discount){
                    
                    container.append( auxCity[i]) 

                    $('.tr-checkbox').change( function(){
                      e = $('.tr-checkbox')
                      a = $('tr')
                      homeData = []
            
                      $('#form-submit').addClass('disabled-btn')
                      $('#form-submit').removeClass('enabled-btn')
            
                      for( var i = 0; i< e.length ; i++){
            
                          $($(e[i]).is(':checked')).each(function(){
                              homeData[i] = a[i]
                              $('#form-submit').removeClass('disabled-btn')
                              $('#form-submit').addClass('enabled-btn')
                              
                        })
                        }
                      })
                  }

                }
                  }else{
              
                    if(citySelect == data.campus.city && courseSelect == 'all'){
                      if(data.course.kind == 'Presencial'){
                        if(rangeValue >= data.price_with_discount){
                    
                          container.append( auxCity[i])
                           
                          $('.tr-checkbox').change( function(){
                            e = $('.tr-checkbox')
                            a = $('tr')
                            homeData = []
                  
                            $('#form-submit').addClass('disabled-btn')
                            $('#form-submit').removeClass('enabled-btn')
                  
                            for( var i = 0; i< e.length ; i++){
                  
                                $($(e[i]).is(':checked')).each(function(){
                                    homeData[i] = a[i]
                                    $('#form-submit').removeClass('disabled-btn')
                                    $('#form-submit').addClass('enabled-btn')
                                    
                              })
                              }
                            })
                        }

                      }
                        }else{
              
                          if(citySelect == data.campus.city && courseSelect == data.course.name ){
                            if(data.course.kind == 'Presencial'){
                              if(rangeValue >= data.price_with_discount){
                    
                                container.append( auxCity[i])
                                 
                                $('.tr-checkbox').change( function(){
                                  e = $('.tr-checkbox')
                                  a = $('tr')
                                  homeData = []
                        
                                  $('#form-submit').addClass('disabled-btn')
                                  $('#form-submit').removeClass('enabled-btn')
                        
                                  for( var i = 0; i< e.length ; i++){
                        
                                      $($(e[i]).is(':checked')).each(function(){
                                          homeData[i] = a[i]
                                          $('#form-submit').removeClass('disabled-btn')
                                          $('#form-submit').addClass('enabled-btn')
                                          
                                    })
                                    }
                                  })
                              }
                            }
                              }
                        }
                  }
  
            }

            }

            if($('#ead').is(':checked')){

              if(citySelect == 'all' && courseSelect == 'all'){
                
                if(data.course.kind == 'EaD'){
                  if(rangeValue >= data.price_with_discount){
                    
                    container.append( auxCity[i])
                     
                    $('.tr-checkbox').change( function(){
                      e = $('.tr-checkbox')
                      a = $('tr')
                      homeData = []
            
                      $('#form-submit').addClass('disabled-btn')
                      $('#form-submit').removeClass('enabled-btn')
            
                      for( var i = 0; i< e.length ; i++){
            
                          $($(e[i]).is(':checked')).each(function(){
                              homeData[i] = a[i]
                              $('#form-submit').removeClass('disabled-btn')
                              $('#form-submit').addClass('enabled-btn')
                              
                        })
                        }
                      })
                  }
                }
            }else{
              
              if(citySelect == 'all' && courseSelect == data.course.name ){

                if(data.course.kind == 'EaD'){
                  if(rangeValue >= data.price_with_discount){
                    
                    container.append( auxCity[i])
                     
                    $('.tr-checkbox').change( function(){
                      e = $('.tr-checkbox')
                      a = $('tr')
                      homeData = []
            
                      $('#form-submit').addClass('disabled-btn')
                      $('#form-submit').removeClass('enabled-btn')
            
                      for( var i = 0; i< e.length ; i++){
            
                          $($(e[i]).is(':checked')).each(function(){
                              homeData[i] = a[i]
                              $('#form-submit').removeClass('disabled-btn')
                              $('#form-submit').addClass('enabled-btn')
                              
                        })
                        }
                      })
                  }
                }
                  }else{
              
                    if(citySelect == data.campus.city && courseSelect == 'all'){
                      if(data.course.kind == 'EaD'){
                        if(rangeValue >= data.price_with_discount){
                    
                          container.append( auxCity[i])
                           
                          $('.tr-checkbox').change( function(){
                            e = $('.tr-checkbox')
                            a = $('tr')
                            homeData = []
                  
                            $('#form-submit').addClass('disabled-btn')
                            $('#form-submit').removeClass('enabled-btn')
                  
                            for( var i = 0; i< e.length ; i++){
                  
                                $($(e[i]).is(':checked')).each(function(){
                                    homeData[i] = a[i]
                                    $('#form-submit').removeClass('disabled-btn')
                                    $('#form-submit').addClass('enabled-btn')
                                    
                              })
                              }
                            })
                        }
                      }
                        }else{
              
                          if(citySelect == data.campus.city && courseSelect == data.course.name ){
                            if(data.course.kind == 'EaD'){
                              if(rangeValue >= data.price_with_discount){
                    
                                container.append( auxCity[i])
                                 
                                $('.tr-checkbox').change( function(){
                                  e = $('.tr-checkbox')
                                  a = $('tr')
                                  homeData = []
                        
                                  $('#form-submit').addClass('disabled-btn')
                                  $('#form-submit').removeClass('enabled-btn')
                        
                                  for( var i = 0; i< e.length ; i++){
                        
                                      $($(e[i]).is(':checked')).each(function(){
                                          homeData[i] = a[i]
                                          $('#form-submit').removeClass('disabled-btn')
                                          $('#form-submit').addClass('enabled-btn')
                                          
                                    })
                                    }
                                  })
                              }
                            }
                              }
                        }
                  }
  
            }

            }
            })

        })

        // Working on check verification for change the button class

        $('.tr-checkbox').change( function(){
          var e = $('.tr-checkbox')
          var a = $('tr')

          $('#form-submit').addClass('disabled-btn')
          $('#form-submit').removeClass('enabled-btn')

          for( var i = 0; i< e.length ; i++){

              $($(e[i]).is(':checked')).each(function(){
                  homeData[i] = a[i]
                  $('#form-submit').removeClass('disabled-btn')
                  $('#form-submit').addClass('enabled-btn')
                  
            })
          }
          })

        // Working on the button add actions

          $(subButton).click(function(){
            
            if($(subButton).hasClass('disabled-btn')){
              
            }else{ $.each(data, function(i, data){
              
              auxCard[i] = '<div class="col col-3"><div class="container card-container align-v-center-col"><section class="header-card"><div class="row"><div class="col"><div class="container-card row"><div class="col div-card"><img src="'+ data.university.logo_url +'" alt=""></div><div class="col div-card"><h3 class="black-text">'+ data.university.name+'</h3></div><div class="col div-card"><h5 class="h-blue-text">'+ data.course.name+'</h5></div><div class="col div-card"><h3 class="black-text">'+ data.university.score +'<span class="score"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></span></h3></div><hr class="divisor"> <div class="col div-card"><h3 class="black-text">'+ data.course.kind + '-' + data.course.shift + '</h3><p class="text-card">Início das aulas em: '+ data.start_date +'</p></div><hr class="divisor"><div class="col div-card"><h2 class="black-text">Mensalidade com o Quero Bolsa:</h2></div><div class="col div-card"><p class="black-text line-through grey-text" > R$'+ data.full_price +'</p><h4 >'+ data.price_with_discount +'<span class="grey-text"> / mês</span></h4></div><div class="col div-card"><button class="delete-card btn-card button-md b-outline-choosed h-blue-text">Excluir</button><button id=""class="offer-validate btn-card enabled-btn"> Ver oferta</button></div></div></div></div></section></div></div>'
              
              return auxCard
            })
            
            $.each(data, function(i, data){
              var e = $('.tr-checkbox')
              
              if(data.enabled == true){
                if($(e[i]).is(':checked')){
                  console.log(e[i])
                  auxCard[i] = '<div class="col col-3"><div class="container card-container align-v-center-col"><section class="header-card"><div class="row"><div class="col"><div class="container-card row"><div class="col div-card"><img src="'+ data.university.logo_url +'" alt=""></div><div class="col div-card"><h3 class="black-text">'+ data.university.name+'</h3></div><div class="col div-card"><h5 class="h-blue-text">'+ data.course.name+'</h5></div><div class="col div-card"><h3 class="black-text">'+ data.university.score +'<span class="score"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></span></h3></div><hr class="divisor"> <div class="col div-card"><h3 class="black-text">'+ data.course.kind + '-' + data.course.shift + '</h3><p class="text-card">Início das aulas em: '+ data.start_date +'</p></div><hr class="divisor"><div class="col div-card"><h2 class="black-text">Mensalidade com o Quero Bolsa:</h2></div><div class="col div-card"><p class="black-text line-through grey-text" > R$'+ data.full_price +'</p><h4 >'+ data.price_with_discount +'<span class="grey-text"> / mês</span></h4></div><div class="col div-card"><button class=" delete-cardbtn-card button-md b-outline-choosed h-blue-text">Excluir</button><button class="offer-validate btn-card enabled-btn"> Ver oferta</button></div></div></div></div></section></div></div>'
                  cardContainer.append( auxCard[i])    
                  closeModal()
                }
              }else{
                if($(e[i]).is(':checked')){
                  console.log(e[i])
                  auxCard[i] = '<div class="col col-3"><div class="container card-container align-v-center-col"><section class="header-card"><div class="row"><div class="col"><div class="container-card row"><div class="col div-card"><img src="'+ data.university.logo_url +'" alt=""></div><div class="col div-card"><h3 class="black-text">'+ data.university.name+'</h3></div><div class="col div-card"><h5 class="h-blue-text">'+ data.course.name+'</h5></div><div class="col div-card"><h3 class="black-text">'+ data.university.score +'<span class="score"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></span></h3></div><hr class="divisor"> <div class="col div-card"><h3 class="black-text">'+ data.course.kind + '-' + data.course.shift + '</h3><p class="text-card">Início das aulas em: '+ data.start_date +'</p></div><hr class="divisor"><div class="col div-card"><h2 class="black-text">Mensalidade com o Quero Bolsa:</h2></div><div class="col div-card"><p class="black-text line-through grey-text" > R$'+ data.full_price +'</p><h4 >'+ data.price_with_discount +'<span class="grey-text"> / mês</span></h4></div><div class="col div-card"><button class=" delete-cardbtn-card button-md b-outline-choosed h-blue-text">Excluir</button><button class="offer-validate btn-card disabled-btn"> Indisponível </button></div></div></div></div></section></div></div>'
                  cardContainer.append( auxCard[i])    
                  closeModal()
                  }
                }
              })
            }
          })

          $($('button').hasClass('.delete-card')).click(function(){
            console.log( clicado)
           
          })
        }
      })
  })

