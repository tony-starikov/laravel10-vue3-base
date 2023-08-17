<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>Second</h1>
                <h2>Counter: {{ counter }}</h2>
            </div>
        </div>
    </div>
</template>

<script>
import {defineComponent, computed} from "vue";
import {useStore} from "vuex";

export default defineComponent({
    components: {},
    name: "Second",
    setup() {
        const store = useStore();
        const counter = computed(() => {
            return store.state.count;
        })
        return {
            counter
        }
    }
});
</script>
