// handleFileSelect = function(event) {
//     var files = event.target.files; // FileList object

//     // files is a FileList of File objects. List some properties.
//     var output = [];
//     console.log('here');
//     for (var i = 0, f; f = files[i]; i++) {
//         console.log('output', output);
//       output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
//                   f.size, ' bytes, last modified: ',
//                   f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
//                   '</li>');
//     }
//     document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
//     };