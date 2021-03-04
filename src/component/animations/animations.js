export const fade = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: { duration: 0.5 },
  },
};
export const toTop = {
  hidden: {
    opacity: 0,
    y: 300,
    transition: { duration: 0.5 },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};
export let parents = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};
