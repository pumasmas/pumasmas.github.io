// Handles "Copy Code" functionality for all code blocks
document.addEventListener('astro:page-load', () => {
    // This runs on initial load and after Astro view transitions
    setupCopyButtons();
});

// Also run on DOMContentLoaded just in case (standard load)
document.addEventListener('DOMContentLoaded', setupCopyButtons);

function setupCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre');

    codeBlocks.forEach((pre) => {
        // Avoid adding multiple buttons if re-running
        if (pre.parentNode.querySelector('.copy-code-btn')) return;

        // Create the button
        const button = document.createElement('button');
        button.className = 'copy-code-btn absolute top-2 right-2 text-gray-400 hover:text-white bg-gray-700/50 hover:bg-gray-700 rounded p-1.5 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100';
        button.innerHTML = '<i class="fas fa-copy"></i>';
        button.ariaLabel = 'Copiar código';
        button.title = 'Copiar';

        // Wrap pre in a relative container if not already
        // But usually, standard markdown parsers just output <pre><code>...
        // We can just set the pre to relative style via class or ensure the parent is relative.
        // Tailwind typography usually makes pre relative? Let's check styles.
        // If not, we wrapper it.
        const wrapper = document.createElement('div');
        wrapper.className = 'relative group mb-4';
        
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);
        wrapper.appendChild(button);

        button.addEventListener('click', async () => {
            const code = pre.querySelector('code')?.innerText || pre.innerText;
            
            try {
                await navigator.clipboard.writeText(code);
                
                // Feedback
                button.innerHTML = '<i class="fas fa-check text-green-400"></i>';
                setTimeout(() => {
                    button.innerHTML = '<i class="fas fa-copy"></i>';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy!', err);
                button.innerHTML = '<i class="fas fa-times text-red-400"></i>';
            }
        });
    });
}
