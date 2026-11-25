export function mock(number: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(number);
        }, number);
    });
}

export function getData(): Promise<number[]> {
    return Promise.all([mock(100), mock(200), mock(300)]);
}

export async function catchException() {
    try {
        await Promise.reject(new Error('my error'));
    } catch (err) {
        return (err as Error).message;
    }
}
