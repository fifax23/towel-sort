// You should implement your task here.

module.exports = function towelSort(matrix) {
    return !matrix || matrix.length === 0
        ? []
        : matrix
              .map((item, index) => (index % 2 === 1 ? item.reverse() : item))
              .flat();
};
