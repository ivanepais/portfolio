export type SocialPlatform = | 'github' | 'linkedin' | 'x' | 'instagram' | 'youtube' | 'website' | 'email';
export interface SocialLink { readonly id?: string; readonly platform: SocialPlatform; readonly label: string; readonly url: string; }
