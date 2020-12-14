const d = document,
    w = window;

export default function smartVideo() {
    const $video = d.querySelectorAll('video[data-smart-video]');

    const cb = (entries) => {
        entries.forEach(entry => {
            entry.isIntersecting
                ? entry.target.play()
                : entry.target.pause();

            w.addEventListener('visibilitychange', (e) =>
                d.visibilityState === 'visible'
                    ? entry.target.play()
                    : entry.target.pause()
            );
        });
    };

    const observer = new IntersectionObserver(cb, { rootMargin: '-50%' });

    $video.forEach((el) => observer.observe(el));
}