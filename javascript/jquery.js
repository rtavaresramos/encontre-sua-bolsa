$(document).ready(function(){
  
  var container = $('#schoolship-container')
  var citySelect = $('#city-select')
  var courseSelect = $('#course-select')
  
  
  var courses =[]
  var cities =[]
  var auxCity = []

    let schoolship_offer= {
        id: "",
        course: {
            name: "",
            kind: "",
            level: "",
            shift: ""
          },
          university: {
            name: "",
            score: "",
            logo_url: ""
          },
          campus: {
            name: "",
            city: ""
          },
        full_price: "",
        price_with_discount: "",
        discount_percentage: "",
        start_date: "",
        enrollment_semester: "",
        enabled: ""
    }
    
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
            
            schoolship_offer.id = i
            schoolship_offer.course.name = data.course.name
            schoolship_offer.course.kind = data.course.kind
            schoolship_offer.course.level = data.course.level
            schoolship_offer.course.shift = data.course.shift
            schoolship_offer.university.name = data.university.name
            schoolship_offer.university.score = data.university.score
            schoolship_offer.university.logo_url = data.university.logo_url
            schoolship_offer.campus.name = data.campus.name
            schoolship_offer.campus.city = data.campus.city
            schoolship_offer.full_price = data.full_price
            schoolship_offer.price_with_discount = data.price_with_discount
            schoolship_offer.discount_percentage = data.discount_percentage
            schoolship_offer.start_date = data.start_date
            schoolship_offer.enrollment_semester = data.enrollment_semester
            schoolship_offer.enabled = data.enabled
            console.log(data.course.kind)
            auxCity[i] = "<tr><div class='col'><div class='row'><div class='col col-2'><div class='col col-4'><td id='td-checkbox'><label class='label-container black-text mr-4'><input type='checkbox' id='"+schoolship_offer.id+"'><span class='check'></span></label></td></div><div class='col col-3'><td id='td-img'><img class='img-adjust' src='"+schoolship_offer.university.logo_url+"'></td></div><div class='col col-3 align-start ml-3'><td id='td-course'><h5 class='d-blue-text'>"+ schoolship_offer.course.name +"</h5><p class='sm-text'>"+ schoolship_offer.course.level +"</p></td></div></div><div class='col col-2 align-end mr-7'><td id='td-discount'><p>Bolsa de <span>"+ schoolship_offer.discount_percentage +"% </span><br><span>R$ "+ schoolship_offer.price_with_discount +"/mês</span></p></td></div></div></div></tr><hr class='divisor mt-8 mb-8'>"
             
            container.append(auxCity[i])

          })
          

          // Here was added the filter of cities and universty course working together

          $('select').change( function(){
            
            $('tr').remove()


            $.each(data, function(i, data){
              courseSelect = $('#course-select').val()
              citySelect = $('#city-select').val()

              schoolship_offer.id = i
              schoolship_offer.course.name = data.course.name
              schoolship_offer.course.kind = data.course.kind
              schoolship_offer.course.level = data.course.level
              schoolship_offer.course.shift = data.course.shift
              schoolship_offer.university.name = data.university.name
              schoolship_offer.university.score = data.university.score
              schoolship_offer.university.logo_url = data.university.logo_url
              schoolship_offer.campus.name = data.campus.name
              schoolship_offer.campus.city = data.campus.city
              schoolship_offer.full_price = data.full_price
              schoolship_offer.price_with_discount = data.price_with_discount
              schoolship_offer.discount_percentage = data.discount_percentage
              schoolship_offer.start_date = data.start_date
              schoolship_offer.enrollment_semester = data.enrollment_semester
              schoolship_offer.enabled = data.enabled
              
              if(citySelect == 'all' && courseSelect == 'all'){

                
                container.append("<tr><div class='col'><div class='row'><div class='col col-2'><div class='col col-4'><td id='td-checkbox'><label class='label-container black-text mr-4'><input type='checkbox' id='"+schoolship_offer.id+"'><span class='check'></span></label></td></div><div class='col col-3'><td id='td-img'><img class='img-adjust' src='"+schoolship_offer.university.logo_url+"'></td></div><div class='col col-3 align-start ml-3'><td id='td-course'><h5 class='d-blue-text'>"+ schoolship_offer.course.name +"</h5><p class='sm-text'>"+ schoolship_offer.course.level +"</p></td></div></div><div class='col col-2 align-end mr-7'><td id='td-discount'><p>Bolsa de <span>"+ schoolship_offer.discount_percentage +"% </span><br><span>R$ "+ schoolship_offer.price_with_discount +"/mês</span></p></td></div></div></div></tr><hr class='divisor mt-8 mb-8'>")
              
              }else{
                
                if(citySelect == 'all' && courseSelect == data.course.name ){
               
                  container.append("<tr><div class='col'><div class='row'><div class='col col-2'><div class='col col-4'><td id='td-checkbox'><label class='label-container black-text mr-4'><input type='checkbox' id='"+schoolship_offer.id+"'><span class='check'></span></label></td></div><div class='col col-3'><td id='td-img'><img class='img-adjust' src='"+schoolship_offer.university.logo_url+"'></td></div><div class='col col-3 align-start ml-3'><td id='td-course'><h5 class='d-blue-text'>"+ schoolship_offer.course.name +"</h5><p class='sm-text'>"+ schoolship_offer.course.level +"</p></td></div></div><div class='col col-2 align-end mr-7'><td id='td-discount'><p>Bolsa de <span>"+ schoolship_offer.discount_percentage +"% </span><br><span>R$ "+ schoolship_offer.price_with_discount +"/mês</span></p></td></div></div></div></tr><hr class='divisor mt-8 mb-8'>")
                    }else{
                
                      if(citySelect == data.campus.city && courseSelect == 'all'){
                     
                        container.append("<tr><div class='col'><div class='row'><div class='col col-2'><div class='col col-4'><td id='td-checkbox'><label class='label-container black-text mr-4'><input type='checkbox' id='"+schoolship_offer.id+"'><span class='check'></span></label></td></div><div class='col col-3'><td id='td-img'><img class='img-adjust' src='"+schoolship_offer.university.logo_url+"'></td></div><div class='col col-3 align-start ml-3'><td id='td-course'><h5 class='d-blue-text'>"+ schoolship_offer.course.name +"</h5><p class='sm-text'>"+ schoolship_offer.course.level +"</p></td></div></div><div class='col col-2 align-end mr-7'><td id='td-discount'><p>Bolsa de <span>"+ schoolship_offer.discount_percentage +"% </span><br><span>R$ "+ schoolship_offer.price_with_discount +"/mês</span></p></td></div></div></div></tr><hr class='divisor mt-8 mb-8'>")
                          }else{
                
                            if(citySelect == data.campus.city && courseSelect == data.course.name ){
                           
                              container.append("<tr><div class='col'><div class='row'><div class='col col-2'><div class='col col-4'><td id='td-checkbox'><label class='label-container black-text mr-4'><input type='checkbox' id='"+schoolship_offer.id+"'><span class='check'></span></label></td></div><div class='col col-3'><td id='td-img'><img class='img-adjust' src='"+schoolship_offer.university.logo_url+"'></td></div><div class='col col-3 align-start ml-3'><td id='td-course'><h5 class='d-blue-text'>"+ schoolship_offer.course.name +"</h5><p class='sm-text'>"+ schoolship_offer.course.level +"</p></td></div></div><div class='col col-2 align-end mr-7'><td id='td-discount'><p>Bolsa de <span>"+ schoolship_offer.discount_percentage +"% </span><br><span>R$ "+ schoolship_offer.price_with_discount +"/mês</span></p></td></div></div></div></tr><hr class='divisor mt-8 mb-8'>")
                                }
                          }
                    }

              }
              
    
              })
          })
        
        }
	})
});

