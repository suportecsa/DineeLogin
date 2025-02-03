import {
  Search,
  Bell,
  ChevronDown,
  Filter,
  Plus,
  MoreVertical,
  Star,
  Clock,
} from "lucide-react";

export function DashboardContent() {
  const orders = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&h=80&q=80",
      name: "X-Burger",
      status: "Pendente",
      time: "2 min",
      rating: 4.5,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&h=80&q=80",
      name: "X-Salada",
      status: "Preparando",
      time: "5 min",
      rating: 4.8,
    },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Pesquisar pedidos..."
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-[300px] focus:outline-none focus:border-[#004D40]"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <Bell className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=32&h=32&q=80"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </div>
        </div>
      </div>

      {/* Orders Section */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Pedidos recentes</h2>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <Filter className="w-4 h-4" />
                <span className="text-sm">Filtrar</span>
              </button>
              <button className="flex items-center gap-2 px-3 py-2 bg-[#004D40] text-white rounded-lg hover:bg-[#00695C]">
                <Plus className="w-4 h-4" />
                <span className="text-sm">Novo pedido</span>
              </button>
            </div>
          </div>
        </div>

        {/* Orders List */}
        <div className="divide-y divide-gray-100">
          {orders.map((order) => (
            <div key={order.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={order.image}
                    alt={order.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{order.name}</h3>
                    <span className="text-sm text-gray-500">
                      {order.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{order.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-600">
                      {order.rating}
                    </span>
                  </div>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <MoreVertical className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
