import { createClient } from '@sanity/client';

export const sanity = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  apiVersion: '2025-01-01',
  useCdn: true,
});

export const q = {
  games: `*[_type=="game"]|order(title asc){title, "slug": slug.current}`,
  guidesForGame: `*[_type=="guide" && game->slug.current==$game]|order(updated desc){title, season, updated, "slug": slug.current, "game": game->slug.current}`,
  guideBySlugs: `*[_type=="guide" && slug.current==$slug && game->slug.current==$game][0]{title, season, updated, "game": game->title, bodyMd}`
};
