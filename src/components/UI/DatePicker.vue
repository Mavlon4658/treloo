<template>
    <v-date-picker :activator="activator" v-model="leave"></v-date-picker>
</template>

<script>
export default {
    name: 'DatePicker',
    props: {
        activator: String,
    }
}
</script>

<style>

</style>