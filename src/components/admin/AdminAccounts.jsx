import { useState } from "react";
import { Plus, X } from "lucide-react";

import richmondJ from "../../assets/images/richmondJ.png";
import chisomeze from "../../assets/images/chisomeze.png";
import jefferson from "../../assets/images/jefferson.png";
import anonymous from "../../assets/images/anonymous.png";
import uwem from "../../assets/images/uwem.png";

const initialAdmins = [
  {
    id: 1,
    name: "Richmond J.",
    email: "j_richmond@gmail.com",
    status: "Overall",
    avatar: richmondJ,
  },
  {
    id: 2,
    name: "Chisom Eze",
    email: "ezechisom@gmail.com",
    status: "Overall",
    avatar: chisomeze,
  },
  {
    id: 3,
    name: "Jefferson Didi",
    email: "jefflidi@gmail.com",
    status: "Moderator",
    avatar: jefferson,
  },
  {
    id: 4,
    name: "Anonymous Admin",
    email: "naghostosha@gmail.com",
    status: "Moderator",
    avatar: anonymous,
  },
  {
    id: 5,
    name: "Uwem David",
    email: "justfeltlikedaddingmyname",
    status: "Moderator",
    avatar: uwem,
  },
];

const emptyForm = { name: "", email: "", status: "Moderator" };

export default function AdminAccounts() {
  const [admins, setAdmins] = useState(initialAdmins);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [removeId, setRemoveId] = useState(null);

  function openAddModal() {
    setEditingId(null);
    setForm(emptyForm);
    setModalOpen(true);
  }

  function openEditModal(admin) {
    setEditingId(admin.id);
    setForm({
      name: admin.name,
      email: admin.email,
      status: admin.status,
    });
    setModalOpen(true);
  }

  function saveAdmin(event) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim()) return;

    if (editingId !== null) {
      setAdmins((current) =>
        current.map((admin) =>
          admin.id === editingId ? { ...admin, ...form } : admin,
        ),
      );
    } else {
      setAdmins((current) => [
        ...current,
        { id: Date.now(), ...form, avatar: "" },
      ]);
    }

    setModalOpen(false);
    setForm(emptyForm);
  }

  function removeAdmin() {
    setAdmins((current) => current.filter((admin) => admin.id !== removeId));
    setRemoveId(null);
  }

  return (
    <section className="w-full min-w-0 max-w-full flex-1">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h1 className="text-[20px] font-medium text-[#687286] sm:text-[21px]">
          Admins
        </h1>

        <button
          type="button"
          onClick={openAddModal}
          className="flex h-[30px] shrink-0 items-center justify-center gap-2 rounded-[10px] bg-[#2dc849] px-4 text-[10px] font-medium text-white transition hover:bg-[#22b53d] sm:min-w-[116px]"
        >
          <Plus size={15} />
          Add Admin
        </button>
      </div>

      <div className="w-full min-w-0 max-w-full">
        <table className="w-full table-auto border-collapse text-left text-[10px]">
          <thead>
            <tr className="h-[36px] border border-[#dedfe3] bg-[#fafafa] text-[9px] text-[#697386]">
              <th className="px-3 font-normal">S/N</th>
              <th className="px-2 font-normal">Admin Info</th>
              <th className="px-2 font-normal">Status</th>
              <th className="px-2 font-normal">Actions</th>
            </tr>
          </thead>

          <tbody>
            {admins.map((admin, index) => (
              <tr key={admin.id} className="h-[42px] text-black">
                <td className="px-3">{index + 1}</td>

                <td className="px-2">
                  <div className="flex min-w-0 items-center gap-2">
                    {admin.avatar ? (
                      <img
                        src={admin.avatar}
                        alt=""
                        className="h-[15px] w-[15px] shrink-0 rounded-full object-cover"
                      />
                    ) : (
                      <span className="h-[15px] w-[15px] shrink-0 rounded-full bg-[#d9d9d9]" />
                    )}

                    <div className="min-w-0">
                      <p className="truncate font-medium">{admin.name}</p>
                      <p className="mt-0.5 max-w-[180px] truncate text-[8px] text-[#778093]">
                        {admin.email}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="whitespace-nowrap px-2">{admin.status}</td>

                <td className="px-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => openEditModal(admin)}
                      className="min-w-[65px] rounded-full border border-[#c8f4d6] px-3 py-[5px] text-[9px] text-[#22c943] hover:bg-[#effcf3]"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => setRemoveId(admin.id)}
                      className="min-w-[70px] rounded-full border border-[#ffd0d0] px-3 py-[5px] text-[9px] text-[#ff4b52] hover:bg-red-50"
                    >
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {admins.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="py-8 text-center text-sm text-gray-500"
                >
                  No admin accounts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Admin Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-black/40 p-4">
          <form
            onSubmit={saveAdmin}
            className="my-auto w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">
                {editingId !== null ? "Edit Admin" : "Add Admin"}
              </h2>

              <button
                type="button"
                onClick={() => setModalOpen(false)}
                aria-label="Close"
                className="rounded-lg p-1 text-gray-500 hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            <label className="mb-1 block text-sm text-gray-600">
              Full name
            </label>
            <input
              required
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
              className="mb-4 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-green-400"
              placeholder="Enter full name"
            />

            <label className="mb-1 block text-sm text-gray-600">Email</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(event) =>
                setForm({ ...form, email: event.target.value })
              }
              className="mb-4 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-green-400"
              placeholder="Enter email address"
            />

            <label className="mb-1 block text-sm text-gray-600">Role</label>
            <select
              value={form.status}
              onChange={(event) =>
                setForm({ ...form, status: event.target.value })
              }
              className="mb-6 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-green-400"
            >
              <option value="Overall">Overall</option>
              <option value="Moderator">Moderator</option>
            </select>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-600"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-lg bg-[#2dc849] px-5 py-2 text-sm text-white hover:bg-[#22b53d]"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Remove Admin Confirmation */}
      {removeId !== null && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-black/40 p-4">
          <div className="my-auto w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="text-lg font-semibold text-gray-800">
              Remove admin?
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              This removes the account from this demo table. You can cancel to
              keep it.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setRemoveId(null)}
                className="rounded-lg border border-gray-200 px-4 py-2 text-sm"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={removeAdmin}
                className="rounded-lg bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
