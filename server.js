var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Articles =
{
   'article-one':{
  title: 'Article One|Yash Sharma',
  heading: 'Article One',
  date: 'April 4, 2020',
  content: `
  <p>
  This is the content for my First Article.This is the content for my First Article.
  This is the content for my First Article.This is the content for my First Article.
  This is the content for my First Article.This is the content for my First Article.
  </p>

  <p>
  This is the content for my First Article.This is the content for my First Article.
  This is the content for my First Article.This is the content for my First Article.
  This is the content for my First Article.This is the content for my First Article.
  </p>`

 },
 'article-two':{
  title: 'Article Two|Yash Sharma',
  heading: 'Article Two',
  date: 'April 5, 2020',
  content: `
  <p>
  This is the content to my Second Article.
  </p>
  `
 },
 'article-three':{
  title: 'Article Three|Yash Sharma',
  heading: 'Article Three',
  date: 'April 6, 2020',
  content: `
  <p>
  This is the content to my Third Article.
  </p>
  `
 }
};

function createTemplate (data)
{
  var title=data.title;
  var heading=data.heading;
  var date=data.date;
  var content=data.content;

var htmltemplate=
`
<html>

<head>
    <Title>
        ${title}
    </Title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <link href="/ui/style.css" rel="stylesheet" />

</head>


<body>

    <div class="Container">

        <div>
            <a href="/">Home</a>
        </div>

        <hr/>

        <h3>
            ${heading}
        </h3>

        <div>
            ${date}
        </div>

        <div>
            ${content}
        </div>
    </div>
</body>
</html>
`;
return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});





app.get('/:articleName', function(req,res){
  //articleName=article-one
  //articles[articleName]=={} content object for article one.
  var articleName=req.params.articleName;
  //The above was To extract the variable articlename
  res.send(createTemplate(Articles[articleName]));
})



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


var counter=0;
app.get('/counter', function (req, res) {
  counter=counter + 1;
  res.send(counter.toString());
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
