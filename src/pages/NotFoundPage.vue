<template>
    <div class="container">
      <div class="row">
        <div class="offset-2 col-8">
          <div class="card mt-5">
            <div class="card-body text-center">
              <img src="https://media.licdn.com/dms/image/C5112AQEw1fXuabCTyQ/article-inline_image-shrink_1500_2232/0/1581099611064?e=1725494400&v=beta&t=7ODxobcklUlei8lN7u0M3Vetm-LJwP-bo5MYM1-O-qw" width="300" />
              <div class="display-3">Seite nicht gefunden</div>
              <hr>
              <router-link to="/" class="btn bg-vue">
                Bring mir Zurück zur Startseite
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>


export default {
  name: "NotFoundPage",

}
</script>