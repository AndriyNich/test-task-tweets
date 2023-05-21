const LS = 'followers';

function getLsData() {
  let lsData = localStorage.getItem(LS);
  if (lsData) {
    try {
      lsData = JSON.parse(lsData);

      if (Array.isArray(lsData)) {
        return lsData;
      }
    } catch {}
  }
  return [];
}

function saveToLs(data) {
  localStorage.setItem(LS, JSON.stringify(data));
}

export const lsFollowers = {
  set(id) {
    const lsData = getLsData();
    lsData.push(id);
    saveToLs(lsData);
  },
  unset(id) {
    saveToLs(getLsData().filter(elem => elem !== id));
  },
  unit(data) {
    const lsData = getLsData();
    const result = data.map(elem => {
      const isFollowing =
        lsData.filter(elemLs => elemLs === elem.id).length > 0;
      return { ...elem, isFollowing, followers: elem.followers + isFollowing };
    });
    return result;
  },
};
