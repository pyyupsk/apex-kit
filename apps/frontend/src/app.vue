<script setup lang="ts">
import { trpc } from "@/api/trpc";
import { useQuery } from "@tanstack/vue-query";

const {
  data: posts,
  error,
  isLoading,
} = useQuery({
  queryFn: async () => {
    const posts = await trpc.post.getAllPosts.query();
    return posts;
  },
  queryKey: ["posts"],
});

function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString();
}
</script>

<template>
  <div>
    <h2>Posts</h2>

    <div v-if="isLoading">Loading posts...</div>
    <div v-else-if="error">Error loading posts: {{ error }}</div>
    <div v-else>
      <div>
        <div v-for="post in posts" :key="post.id">
          <h3>{{ post.title }}</h3>
          <p>{{ post.content }}</p>
          <p>Published: {{ post.published ? "Yes" : "No" }}</p>
          <p>Created: {{ formatDate(post.createdAt) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
