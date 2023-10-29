// Função para trocar os valores de duas posições de um vetor
const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

// Função para embaralhar os elementos de um vetor
const shuffle = (arr, numShuffles) => {
    for (let i = 0; i < numShuffles; i++) {
        const randomIndex1 = Math.floor(Math.random() * arr.length);
        const randomIndex2 = Math.floor(Math.random() * arr.length);
        swap(arr, randomIndex1, randomIndex2);
    }
};

// Função de ordenação Bubble Sort
const bubble_sort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
};

// Função de ordenação Selection Sort
const selection_sort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr, i, minIndex);
    }
};

// Função de ordenação Quick Sort
const quick_sort = (arr, low, high) => {
    if (low < high) {
        const pivot = partition(arr, low, high);
        quick_sort(arr, low, pivot - 1);
        quick_sort(arr, pivot + 1, high);
    }
};

// Função de particionamento (usada pelo Quick Sort)
const partition = (arr, low, high) => {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
};
