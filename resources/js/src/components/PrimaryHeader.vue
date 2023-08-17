<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand fw-bold" href="#">Laravel | Vue</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0 w-100 justify-content-center">
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/">HOME</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="first">FIRST</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="second">SECOND</router-link>
                    </li>
                </ul>
                <div class="d-flex">
                    <a target="_blank" href="https://github.com/tony-starikov" class="btn btn-link">
                        <i class="bi bi-github text-dark" style="font-size: 2rem"></i>
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "PrimaryHeader"
}
</script>
