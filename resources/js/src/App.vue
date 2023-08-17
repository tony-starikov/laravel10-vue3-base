<template>
    <PrimaryHeader/>
    <div class="container mt-3">
        <div class="row">
            <div class="col-12">
                <h1>Hello, {{ username }}</h1>
            </div>
        </div>
    </div>
    <main>
        <router-view/>
    </main>
</template>

<script>
import {defineComponent} from "vue";
import PrimaryHeader from "./components/PrimaryHeader.vue";

export default defineComponent({
    components: {PrimaryHeader},
    setup() {
        return {
            username: 'Tony'
        }
    }
});
</script>
