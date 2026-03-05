import { ActionError, defineAction } from 'astro:actions';

const BIN_ID = import.meta.env.BIN_ID_A;
const API_KEY = `$2a$10$${import.meta.env.BIN_ID_KEY_B}.${import.meta.env.BIN_ID_KEY_A}`;
const url = `https://api.jsonbin.io/v3/b/${BIN_ID}`;
const headers = {
  "X-Master-Key": API_KEY,
  "Content-Type": "application/json",
};

export const server = {
  getClicks: defineAction({
    handler: async () => {
      try {
        const res = await fetch(url, { headers });

        if (!res.ok) {
          throw new ActionError({
            code: 'BAD_REQUEST',
            message: `${res.status}`,
          });
        }

        const data = await res.json();

        if (data && data.record && typeof data.record.clicks !== 'undefined') {
          return { clicks: data.record.clicks };
        } else {
          console.error(data);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }),

  incrementClicks: defineAction({
    handler: async () => {
      try {
        const getRes = await fetch(url, { headers });

        if (!getRes.ok) {
          throw new ActionError({
            code: 'BAD_REQUEST',
            message: `${getRes.status}`,
          });
        }

        const getData = await getRes.json();
        const currentClicks = (getData && getData.record && typeof getData.record.clicks === 'number') ? getData.record.clicks : 0;
        const newClicks = currentClicks + 1;

        const putRes = await fetch(url, {
          method: "PUT",
          headers,
          body: JSON.stringify({ clicks: newClicks }),
        });
        if (!putRes.ok) {
          throw new ActionError({
            code: 'BAD_REQUEST',
            message: `${putRes.status}`,
          });
        }
        return { clicks: newClicks };
      } catch (error) {
        console.error(error);
      }
    }
  })
};