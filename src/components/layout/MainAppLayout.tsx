import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Defines the props for the MainAppLayout component.
 * @interface MainAppLayoutProps
 */
interface MainAppLayoutProps {
  /**
   * The content to be rendered within the layout.
   * This is typically a page or a set of components.
   */
  children: React.ReactNode;
  
  /**
   * Optional additional CSS classes to apply to the main layout container.
   */
  className?: string;
}

/**
 * MainAppLayout is a functional component that serves as the primary structural
 * container for application pages. It implements the overall layout requirements,
 * such as centering content on the screen.
 * 
 * Based on the project requirements, it creates a full-screen, centered
 * view for the login card.
 *
 * @param {MainAppLayoutProps} props - The props for the component.
 * @returns {React.ReactElement} The rendered layout component.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        // Implements the 'overall' layout requirement from the project context.
        // It uses flexbox to center content horizontally and vertically.
        // Using min-h-screen ensures the layout takes at least the full viewport height.
        'flex min-h-screen items-center justify-center bg-background p-4',
        className
      )}
    >
      {/* This div enforces the 'cardWidth' sizing requirement, ensuring the content
          (like the LoginForm) adheres to the specified width while being responsive. */}
      <div className="w-full max-w-[400px]">
        {children}
      </div>
    </main>
  );
};

export default MainAppLayout;
