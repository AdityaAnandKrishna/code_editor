// var btn = document.querySelector('#myButton');
// btn.addEventListener('click', prepareSource());

// Base Template
var base_tpl =
`<!doctype html>\n
<html>\n\t
<head>\n\t\t
<meta charset=\"utf-8\">\n\t\t
<title>Test</title>\n\n\t\t\n\t
</head>\n\t
<body>\n\t\n\t
</body>\n
</html>`;
var prepareSource = function(){
    var html = html_editor.getValue(),
        css  = css_editor.getValue(),
        js   = js_editor.getValue(),
        src  = ' ';
    // HTML
    src = base_tpl.replace('<body>', html+'</body>');

    // CSS 
    css = '<style>'+ css + '</style>';
    src = src.replace('</head>', css + '</head>');

    // JS 
    js = '<script>'+ css + '</script';
    src = src.replace('</body>', js + '</body>');

    return src;
}

// codemirror options
var cm_opt = {
    mode: 'text/html',
    gutter:true,
    lineNumbers: true,
    onChange: function (instance , changes){
        render();
    },
    
};

// HTML Editor
var html_box = document.querySelector('#html textarea'),
    html_editor = CodeMirror.fromTextArea(html_box, cm_opt); 

// CSS Editor
cm_opt.mode = 'css'; 
var css_box = document.querySelector('#css textarea'),
    css_editor = CodeMirror.fromTextArea(css_box, cm_opt);

// CSS Editor
cm_opt.mode = 'javascript'; 
var js_box = document.querySelector('#js textarea'),
    js_editor = CodeMirror.fromTextArea(js_box, cm_opt);   

// Setting code editors inittal content
html_editor.setValue(`<!-- comment -->
<h1>Hello Code Mirror</h1>
                    `);
css_editor.setValue(`body{background: grey}`);
js_editor.setValue(`// comment in js
var num = 5;`);

var btn = document.querySelector('#myButton').addEventListener('Click', render);
// Render
var render = function(){
    var source = prepareSource();
    
    var iframe = document.querySelector('#result iframe'),
				iframe_doc = iframe.contentDocument;
               
                iframe_doc.open();
                iframe_doc.write(source);
                iframe_doc.close();

        
        // if( document.getElementById('myButton').addEventListener('click',function(){
        //     iframe_doc.open();
        //     iframe_doc.write(source);
        //     iframe_doc.close();
        // }));
        

}