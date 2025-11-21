import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useStockSearch, SearchResult } from '../hooks/useStockSearch';

interface ModernStockInputProps {
  value: string;
  onChange: (value: string) => void;
  onStockSelect?: (code: string, name: string) => void;
}

export default function ModernStockInput({ value, onChange, onStockSelect }: ModernStockInputProps) {
  const { search, isLoading } = useStockSearch();
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const ITEMS_PER_PAGE = 5;

  useEffect(() => {
    if (value.trim().length > 0) {
      const results = search(value);
      setSearchResults(results);
      setShowDropdown(results.length > 0);
      setCurrentPage(0);
    } else {
      setSearchResults([]);
      setShowDropdown(false);
      setCurrentPage(0);
    }
  }, [value, search]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const totalPages = Math.ceil(searchResults.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentResults = searchResults.slice(startIndex, endIndex);

  const handleStockClick = (stock: SearchResult) => {
    const displayValue = `${stock.code} ${stock.name}`;
    onChange(displayValue);
    setShowDropdown(false);

    if (onStockSelect) {
      onStockSelect(stock.code, stock.name);
    }
  };

  const handleInputFocus = () => {
    if (searchResults.length > 0) {
      setShowDropdown(true);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
  };

  return (
    <div className="relative w-full animate-fadeIn" style={{ animationDelay: '0.1s' }}>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={handleInputFocus}
          placeholder="株式コードを入力"
          className="w-full px-5 py-4 text-base text-gray-800 bg-white rounded-modern-xl border-0 focus:ring-2 focus:ring-modern-purple-500 focus:outline-none shadow-lg placeholder-gray-400 transition-all duration-200 focus:scale-[1.01]"
          disabled={isLoading}
        />
      </div>

      {showDropdown && currentResults.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-xl overflow-hidden animate-fadeIn"
        >
          <div className="max-h-80 overflow-y-auto">
            {currentResults.map((stock, index) => (
              <button
                key={`${stock.code}-${index}`}
                onClick={() => handleStockClick(stock)}
                className="w-full px-4 py-3 text-left hover:bg-modern-purple-50 transition-colors border-b border-gray-100 last:border-b-0"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">{stock.code}</div>
                    <div className="text-sm text-gray-600">{stock.name}</div>
                  </div>
                  <div className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                    {stock.market}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-t border-gray-200">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                className="flex items-center gap-1 px-3 py-1 text-sm text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                前へ
              </button>

              <div className="text-sm text-gray-600">
                {currentPage + 1} / {totalPages}
              </div>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages - 1}
                className="flex items-center gap-1 px-3 py-1 text-sm text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                次へ
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {isLoading && (
        <div className="absolute left-0 right-0 top-full mt-2 text-center text-sm text-gray-300">
          読み込み中...
        </div>
      )}
    </div>
  );
}
