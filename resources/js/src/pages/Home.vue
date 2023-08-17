<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>Home</h1>
                <h2>Counter: {{ counter }}</h2>
                <button type="button" class="btn btn-primary" @click="increment">Increment</button>
            </div>
        </div>
    </div>
</template>

<script>
import {defineComponent, computed} from "vue";
import {useStore} from "vuex";

export default defineComponent({
    components: {},
    name: "Home",
    setup() {
        const store = useStore();
        const counter = computed(() => {
            return store.state.count;
        })
        const increment = () => {
            store.commit('increment');
        }
        return {
            counter,
            increment
        }
    }
});
</script>
