export { categoryRegistry } from '@kiiako/render';

/**
 * Auto-register file for all Kiiako blocks
 * Import this file to automatically register all blocks with categoryRegistry
 */

/**
 * Initialize and register all blocks
 * This function is idempotent - safe to call multiple times
 */
declare function initializeBlocks(): void;

export { initializeBlocks };
