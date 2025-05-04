export interface SideProps {
  data?: Partial<{
    word: string;
    phonetic: string;
    meaning: string;
    example: string;
    exampleZh: string;
    phraseCollocation?: string;
    specialTransformation?: string;
    derive?: string;
    synonym?: string;
    antonym?: string;
    originalText?: string;
    tags?: string;
  }>;
  /**
   * Whether to use night mode
   * @default false
   */
  night_mode?: boolean;
}
