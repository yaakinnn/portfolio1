/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ProjectCategory = 'video-editing' | 'motion-3d' | 'photography';

export type EmbedType = 'youtube' | 'gdrive' | 'instagram' | 'tiktok' | 'video' | 'images';

export interface Project {
  id: string; // URL-friendly slug
  title: string;
  category: ProjectCategory;
  description: string;
  client: string;
  role: string;
  year: string;
  embedType: EmbedType;
  embedUrl: string; // The query/embed source URL
  coverImageUrl: string; // Grid preview image
  videoPreviewUrl?: string; // Optional hover looping video (or GIF)
  aspectRatio?: 'video' | 'square' | 'vertical' | string; // Aspect ratio of the media to prevent cropping
  images?: string[]; // Multiple images for photographic category
  featured?: boolean; // Set to true to display on home page under 'Selected Works'
  videoForm?: 'long' | 'short'; // Categorizes video-editing into long-form or short-form
}

export interface ClientReview {
  name: string;
  role: string;
  company: string;
  comment: string;
}

export interface TimelineItem {
  year: string;
  role: string;
  company: string;
  description: string;
}
