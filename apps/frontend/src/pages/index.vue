<script setup lang="ts">
import { trpc } from "@/api/trpc";
import { formatDate } from "@/utils/format-date";
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
</script>

<template>
  <div class="mx-auto max-w-4xl px-4 py-8">
    <h2 class="mb-6 text-3xl font-bold text-gray-800">Posts</h2>

    <div v-if="isLoading" class="text-blue-600">Loading posts...</div>
    <div v-else-if="error" class="text-red-500">Error loading posts: {{ error }}</div>
    <div v-else>
      <div class="space-y-6">
        <div
          v-for="post in posts"
          :key="post.id"
          class="rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
        >
          <router-link :to="`/post/${post.id}`">
            <h3 class="mb-2 text-xl font-semibold text-gray-900">{{ post.title }}</h3>
            <p class="mb-1 text-sm text-gray-600">
              Published:
              <span :class="post.published ? 'text-green-600' : 'text-yellow-600'">
                {{ post.published ? "Yes" : "No" }}
              </span>
            </p>
            <p class="text-sm text-gray-500">Created: {{ formatDate(post.createdAt) }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
