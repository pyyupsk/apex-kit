CREATE TABLE `posts` (
	`content` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`published` integer DEFAULT false NOT NULL,
	`title` text(255) NOT NULL
);
