import { onNavigate } from '$app/navigation';

export const convertToSlug = (input: string): string => {
    return input.toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
}

export const prettyUrl = (input: string): string => {
    return input.replace(/(^\w+:|^)\/\//, '')
}

export const formatDate = (input: string): string => {
    let date = new Date(input)
    return date.toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'long',
    })
}

export const preparePageTransition = () => {
    onNavigate(async (navigation) => {
        if (!(document as any).startViewTransition) {
            return;
        }

        return new Promise((oldStateCaptureResolve) => {
            (document as any).startViewTransition(async () => {
                oldStateCaptureResolve();
                await navigation.complete;
            });
        });
    });
};