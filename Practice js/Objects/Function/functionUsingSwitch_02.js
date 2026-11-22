/**
 * 
 * @param {string} studentName 
 */
function getMarks(studentName) {
   console.log('marks for student: ' + studentName);


switch(studentName.trim().toLowerCase()){
    case 'ravi':
        return 90;

    case 'shweta':
        return 95;

    case 'ramya':
        return 85;

    case 'divya':
        return 87;

        default :
        console.log (`${studentName} is not found `);
            return -1;

        }

        };

        // Call funtion
     let m2 = getMarks('naveen');
          console.log(m2);
 