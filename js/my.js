$(document).ready(
		function() {
		
		
		$('#taskBox').focus();
		var i = '0';
		
			
			//$('#collapsible').collapsible();
			
			// $('#collapsible-resizer').resizable({minHeight:240,
			// minWidth: 300, resize: function() {
			// $('#collapsible').collapsible( "refresh" );
			// }
			// });
			
			
			
			$("#addBtn").click(function() {
						
							if ($('#taskBox').val() == ('')
									|| ($('#addDesc').val() === (''))) {
								alert('Fields can not be blank!. ');
							} else
								{

								var fullDate = new Date();
								var twoDigitMonth = fullDate.getMonth()+"";if(twoDigitMonth.length==1)  twoDigitMonth="0" +twoDigitMonth;
								var twoDigitDate = fullDate.getDate()+"";if(twoDigitDate.length==1) twoDigitDate="0" +twoDigitDate;
								var currentDate = twoDigitDate + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
								var fullDate = new Date();
								var twoDigitMonth = fullDate.getMonth()+"";if(twoDigitMonth.length==1)  twoDigitMonth="0" +twoDigitMonth;
								var twoDigitDate = fullDate.getDate()+"";if(twoDigitDate.length==1) twoDigitDate="0" +twoDigitDate;
								var currentDate = twoDigitMonth + "/" +twoDigitDate   +  "/" + fullDate.getFullYear();
								//$('collapsible-set div').append('<h3 id="task">' + ($('#taskBox').val()) + '</h3>').trigger('create');
								//$('collapsible').append('<div id="collapsible" data-role="collapsible" data-collapsed="true">' + ($('#addDesc').val()) + '</div>').trigger('create');
								
								// $('#collapsible').append(
										// '<h3 id=' + x +'>'+ '<p>'+'Date Created: ' + currentDate + ' <br>  ' + 'Task Name:'+ '   '+ 
												// ($('#taskBox').val()) + '</p></h3>'
												// + '<div id ='+(x+1)+'>' + '<p><b>' + 'Task Description:  '+'</b>' + '<br>'
												// + ($('#addDesc').val())
												// + '</p> </div>').trigger('create');
												// x=x+2;
												 
												
								$('<div data-role="collapsible" ><h3>' + "Date Created:  " + '<br>' + currentDate + 
									"<br>" + ($("#taskBox").val()) + '</h3><p>' + '<input type="checkbox" id=' + i +  '/>'+
										($('#addDesc').val()) +'</p></div>').appendTo('[data-role="content"]');
											$('div[data-role=collapsible]').collapsible({theme:'c',refresh:true});
												i++;

								
								$('#addDesc').val("");
								$('#taskBox').val("");

							
 

								$('#taskBox').focus();
								

							
							}

						

					});
			$('#clearBtn').click(function() {
				$('div[data-role=collapsible]').empty();
				//$( ".selector" ).collapsibleset( "refresh" );
				//$( "#myCollapsibleSet" ).children().trigger( "collapse" );
				$('div[data-role=collapsible]').collapsible({theme:'c',refresh:true});
				
				
				//window.location.reload(true);;
				

				alert(" All Notes have been removed! ");

			});
			
			$('#collapsible').dblclick (function(){
			
								
			});
		
		
				
		});