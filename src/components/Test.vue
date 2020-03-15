<template>
  <div>
    <div class="jumbotron">
      <h1>Welcome to the Bulletin Board</h1>
    </div>

    <div class="container" id="events">
      <div class="col-sm-7">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3>Add an Event</h3>
          </div>
          <div class="panel-body">
            <div>
              <input class="form-control" placeholder="Title" />
              <textarea class="form-control" placeholder="Detail"></textarea>
              <input type="date" class="form-control" placeholder="Date" />
              <button class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-5">
        <div class="list-group">
          <a href="#" class="list-group-item">
            <h4 class="list-group-item-heading">
              <i class="glyphicon glyphicon-bullhorn"></i>
              test
            </h4>
            <h5>
              <i class="glyphicon glyphicon-calendar"></i>
              aaa
            </h5>
            <p class="list-group-item-text">bbb</p>
            <button class="btn btn-xs btn-danger">Delete</button>
          </a>
          <a href="#" class="list-group-item">
            <h4 class="list-group-item-heading">
              <i class="glyphicon glyphicon-bullhorn"></i>
              test
            </h4>
            <h5>
              <i class="glyphicon glyphicon-calendar"></i>
              aaa
            </h5>
            <p class="list-group-item-text">bbb</p>
            <button class="btn btn-xs btn-danger">Delete</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>