const express = require('express'),
      router = express.Router(),
      path = require('path')

const Post = require('../models/post')

router.get('/isauth', (req, res, next) => {
  console.log(req.session)
  res.send(req.user)
})

router.get('/logout', (req, res, next) => {
  req.logout()
  res.redirect('/')
})

router.post('/tree', (req, res) => {
  
  console.log("user requesting friendship path, from "+req.body.user+" to "+req.body.target);

  //find the shortest path from the user to the target

  //send the array back to the user

  res.status(200).send({'Status':'Tree not setup'});
})

/*
router.get('/post', (req, res) => {
  Post.find({}, (err, posts) => {
    if (err) throw err
    if (!posts) {
      const init = new Post({
        id: 0,
        username: 'ragingbull',
        displayName: 'Raging Bull',
        date: Date.now(),
        title: 'Greetings from California State University, ' +
          'Dominguez Hills in Carson, CA!',
        body: 'This post serves as a placeholder.'
      })
      init.save(err => {
        if (err) throw err
        console.log('Sample post initialized.')
        res.json({ posts: init })
      })
    }
    else {
      console.log('Posts retrieved: ', posts)
      res.json({ posts })
    }
  })
})
*/
router.get('/posts', (req, res) => {
  Post.find({}).then(function(posts){
    let data = posts.reverse();
    console.log('Sending', data);
    res.send(data);
  })

})

router.post('/create', (req, res) => {
  
  const newPost = new Post({
    user: req.body.user,
    title: req.body.title,
    body: req.body.body,
    createdOn: new Date
  })

  console.log("post created");
  Post.create(newPost, (err) => {
    console.log(newPost)
    if (err) {
    throw err
  }
  res.status(200).send();
  })
})



router.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'))
})

module.exports = router
